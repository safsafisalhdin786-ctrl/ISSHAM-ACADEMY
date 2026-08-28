import { useEffect } from 'react';
import { useSettings } from './context/SettingsContext';

const translations = {
  'نظام إدارة الأكاديمية': 'Système de gestion de l’académie',
  'إغلاق القائمة': 'Fermer le menu',
  'الإشعارات': 'Notifications',
  المستخدم: 'Utilisateur',
  'تسجيل الخروج': 'Se déconnecter',
  'لوحة التحكم': 'Tableau de bord',
  'إدارة التلاميذ': 'Gestion des élèves',
  'الحضور والغياب': 'Présence et absences',
  'إدارة الأساتذة': 'Gestion des enseignants',
  'المالية والأداءات': 'Finances et paiements',
  'التقارير المالية': 'Rapports financiers',
  'إعدادات النظام': 'Paramètres du système',
  'مرحباً بك 👋': 'Bienvenue 👋',
  أونلاين: 'En ligne',
  'نظرة عامة على أداء ومداخيل المركز هذا الشهر': 'Vue d’ensemble des performances et des revenus du centre ce mois-ci',
  'إضافة / إدارة التلاميذ 👥': 'Ajouter / gérer les élèves 👥',
  'تسجيل الحضور اليومي ✅': 'Enregistrer la présence du jour ✅',
  'تسجيل الأداءات المالية 💰': 'Enregistrer les paiements 💰',
  'إجمالي التلاميذ': 'Total des élèves',
  'عدد الأساتذة': 'Nombre d’enseignants',
  'الحضور اليوم': 'Présence du jour',
  'مداخيل الشهر': 'Revenus du mois',
  'مؤشرات الأداء السريعة 📊': 'Indicateurs rapides 📊',
  'نسبة الحضور المسجلة اليوم': 'Taux de présence enregistré aujourd’hui',
  'حالة المداخيل المستحقة': 'État des revenus dus',
  'تأكد من متابعة أداءات التلاميذ المتبقية عبر صفحة الأداءات المالية.': 'Suivez les paiements restants depuis la page des finances.',
  '⚙️ إعدادات الأكاديمية': '⚙️ Paramètres de l’Académie',
  'التحكم في الهوية، الألوان، اللغة، المشرفين، وبيانات المؤسسة.': 'Gérez l’identité, les couleurs, la langue, les administrateurs et les informations de l’établissement.',
  '🎨 الهوية والألوان واللغة': '🎨 Identité, couleurs et langue',
  '👥 إدارة المشرفين': '👥 Gestion des administrateurs',
  '📋 بيانات المؤسسة': '📋 Informations de l’établissement',
  'تخصيص اللوغو، الألوان، واللغة': 'Personnaliser le logo, les couleurs et la langue',
  'اسم المؤسسة / الأكاديمية *': 'Nom de l’établissement / académie *',
  'رابط اللوغو': 'URL du logo',
  'معاينة اللوغو:': 'Aperçu du logo :',
  'لون خلفية الصفحة': 'Couleur d’arrière-plan',
  'رمادي فاتح هادئ': 'Gris clair doux',
  'أبيض عاجي': 'Blanc ivoire',
  'وضع مظلم': 'Mode sombre',
  'دافئ خفيف': 'Chaleur légère',
  'لغة النظام': 'Langue du système',
  العربية: 'Arabe',
  'اللون الرئيسي للهوية': 'Couleur principale de l’identité',
  'جاري الحفظ...': 'Enregistrement...',
  'حفظ التغييرات ✅': 'Enregistrer les modifications ✅',
  'إدارة المشرفين': 'Gestion des administrateurs',
  'هذه القائمة مخصصة لتسجيل الحسابات المعتمدة كمشرفين داخل إعدادات الأكاديمية.': 'Cette liste sert à enregistrer les comptes autorisés comme administrateurs de l’académie.',
  'إضافة طالب جديد': 'Ajouter un élève',
  'الاسم الكامل': 'Nom complet',
  'المستوى الدراسي': 'Niveau scolaire',
  'هاتف ولي الأمر': 'Téléphone du parent',
  'الواجب الشهري': 'Frais mensuels',
  'حفظ التلميذ': 'Enregistrer l’élève',
  'إلغاء': 'Annuler',
  'بحث عن تلميذ...': 'Rechercher un élève...',
  'لا توجد بيانات': 'Aucune donnée',
  'الأرشيف والسجلات': 'Archives et historique',
  'أرشيف الحضور': 'Archives de présence',
  'الطلاب المؤرشفون': 'Élèves archivés',
  'سجل النشاط': 'Journal d’activité',
  'اختر تاريخا مخصصا': 'Choisir une date personnalisée',
  'أو اختر شهرا': 'Ou choisir un mois',
  'تصدير السجل': 'Exporter le journal',
  'التاريخ': 'Date',
  'التلميذ': 'Élève',
  'الحالة': 'Statut',
  'وقت التسجيل': 'Heure d’enregistrement',
  'إعادة تفعيل': 'Réactiver',
  'لا توجد ملفات مؤرشفة.': 'Aucun dossier archivé.',
  'لا توجد أنشطة مسجلة بعد.': 'Aucune activité enregistrée.',
  'جاري تحميل الإعدادات...': 'Chargement des paramètres...',
  'تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅': 'Modifications enregistrées et appliquées partout ! ✅',
};

const attributeTranslations = {
  placeholder: translations,
  title: translations,
  'aria-label': translations,
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();

const translateNode = (node, enabled) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const original = node.nodeValue || '';
    const trimmed = original.trim();
    if (!trimmed) return;
    if (!originalText.has(node)) originalText.set(node, trimmed);
    const source = originalText.get(node);
    const next = enabled ? (translations[source] || source) : source;
    const replacement = original.replace(trimmed, next);
    if (replacement !== original) node.nodeValue = replacement;
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return;
  Object.entries(attributeTranslations).forEach(([attribute, dictionary]) => {
    const value = node.getAttribute(attribute);
    if (!value) return;
    if (!originalAttributes.has(node)) originalAttributes.set(node, {});
    const saved = originalAttributes.get(node);
    if (!saved[attribute]) saved[attribute] = value;
    const source = saved[attribute];
    const next = enabled ? (dictionary[source] || source) : source;
    if (next !== value) node.setAttribute(attribute, next);
  });
  if (!['SCRIPT', 'STYLE', 'TEXTAREA'].includes(node.tagName)) {
    node.childNodes.forEach((child) => translateNode(child, enabled));
  }
};

export function I18nBridge() {
  const { settings } = useSettings();
  const isFrench = settings?.branding?.language === 'fr';

  useEffect(() => {
    const apply = () => translateNode(document.body, isFrench);
    apply();
    let applying = false;
    const observer = new MutationObserver(() => {
      if (applying) return;
      applying = true;
      apply();
      applying = false;
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [isFrench]);

  return null;
}
