import React from 'react';
import logger from '../utils/logger';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    logger.error('ErrorBoundary', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6 text-center" dir="rtl">
        <div className="max-w-md rounded-2xl border border-amber-200 bg-white p-8 shadow-xl">
          <h1 className="text-xl font-black text-[#0B192C]">حدث خطأ غير متوقع</h1>
          <p className="mt-3 text-sm font-semibold text-slate-700">يرجى إعادة تحميل الصفحة للمتابعة.</p>
          <button type="button" onClick={() => window.location.reload()} className="mt-6 rounded-xl bg-[#0B192C] px-5 py-3 font-black text-white hover:bg-[#1E3E62]">إعادة تحميل الصفحة</button>
        </div>
      </div>
    );
  }
}
