import { AlertTriangle } from 'lucide-react';

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = 'تأكيد',
  cancelLabel = 'إلغاء',
  busy = false,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !busy) onCancel();
      }}
    >
      <section
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
        className="w-full max-w-md space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-right shadow-2xl"
        dir="rtl"
      >
        <div className="flex items-center gap-3 text-amber-700">
          <AlertTriangle size={24} aria-hidden="true" />
          <h2 id="confirm-dialog-title" className="text-lg font-black text-slate-900">{title}</h2>
        </div>
        <p className="text-sm leading-6 text-slate-600">{message}</p>
        <div className="flex justify-start gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-200"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
          >
            {busy ? 'جاري التنفيذ...' : confirmLabel}
          </button>
        </div>
      </section>
    </div>
  );
}
