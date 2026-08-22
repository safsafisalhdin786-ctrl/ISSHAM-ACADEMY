<!-- استدعاء المكتبات الضرورية (Firebase + Excel + PDF) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.autotable.min.js"></script>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDP3-oVC5Q9mTG4Lj0Y10TXMQmf4BKXB18",
    authDomain: "issham-acadmy.firebaseapp.com",
    projectId: "issham-acadmy",
    storageBucket: "issham-acadmy.firebasestorage.app",
    messagingSenderId: "3012980900",
    appId: "1:3012980900:web:95dd7347dade35626c3631",
    measurementId: "G-9CFVEYM41T"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const studentsCol = collection(db, "students");

  let localStudentsData = [];

  // 1. التحديث التلقائي المباشر (كيبان عند كلشي فالحين)
  onSnapshot(studentsCol, (snapshot) => {
    localStudentsData = [];
    snapshot.forEach(doc => {
      localStudentsData.push({ id: doc.id, ...doc.data() });
    });
    renderStudentsTable(localStudentsData);
  });

  // 2. دالة إضافة تلميذ جديد لـ Firebase
  window.addStudent = async function(event) {
    event.preventDefault();
    const name = document.getElementById("studentName").value;
    const level = document.getElementById("studentLevel").value;
    const group = document.getElementById("studentGroup").value;
    const phone = document.getElementById("parentPhone").value;
    const fee = document.getElementById("monthlyFee").value;

    try {
      await addDoc(studentsCol, {
        name, level, group, phone, fee,
        createdAt: new Date()
      });
      alert("تم تسجيل التلميذ بنجاح فـ قاعدة البيانات!");
      document.getElementById("studentForm").reset();
    } catch (e) {
      alert("حدث خطأ أثناء الحفظ: " + e.message);
    }
  };

  // 3. دالة إرسال رسالة الواتساب وتنظيف الرقم تلقائياً
  window.sendWhatsApp = function(phoneName, studentName) {
    let cleanPhone = phoneName.replace(/\D/g, ''); 
    if (cleanPhone.startsWith('0')) {
      cleanPhone = '212' + cleanPhone.slice(1);
    }
    const message = `السلام عليكم، بخصوص التلميذ(ة) ${studentName} فـ أكاديمية إسهام...`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // 4. تصدير الجدول إلى Excel
  window.exportToExcel = function() {
    if (localStudentsData.length === 0) return alert("لا توجد بيانات للتصدير");
    const ws = XLSX.utils.json_to_sheet(localStudentsData.map(s => ({
      "الاسم الكامل": s.name,
      "المستوى الدراسي": s.level,
      "المجموعة": s.group,
      "هاتف ولي الأمر": s.phone,
      "المبلغ الشهري": s.fee
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "التلاميذ");
    XLSX.writeFile(wb, "لائحة_تلاميذ_أكاديمية_إسهام.xlsx");
  };

  // 5. تصدير الجدول إلى PDF
  window.exportToPDF = function() {
    if (localStudentsData.length === 0) return alert("لا توجد بيانات للتصدير");
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Esham Academy - Student List", 14, 15);
    
    const tableData = localStudentsData.map(s => [s.name, s.level, s.group, s.phone, s.fee]);
    doc.autoTable({
      head: [['Name', 'Level', 'Group', 'Phone', 'Fee']],
      body: tableData,
      startY: 20
    });
    doc.save("student_list.pdf");
  };
</script>
