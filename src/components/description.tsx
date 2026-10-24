import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { X } from 'lucide-react';

type RuleSection = {
  id: string;
  title: string;
  items: string[];
};

export default function Description() {
  const t = useTranslations();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sections = t.raw('rules.sections') as RuleSection[];

  const openDialog = () => {
    dialogRef.current?.showModal();
    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    titleRef.current?.focus({ preventScroll: true });
  };

  const closeDialog = () => dialogRef.current?.close();

  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-[#DADEDF] px-5 pb-10"
    >
      <div className="flex max-w-screen-2xl flex-col rounded-2xl bg-[#ECECE2] text-white shadow-xl shadow-[#cecb98]">
        <div className="flex flex-col px-5 py-10 sm:px-10">
          <h2 className="mx-auto mb-10 text-center text-3xl font-bold tracking-widest text-[#333333]">
            {t('description')}
          </h2>
          <span className="font-geologica text-red-500">{t('warningRules')}</span>
          <button
            onClick={openDialog}
            type="button"
            aria-haspopup="dialog"
            className="mt-4 rounded-full bg-[#756C63] p-4 font-geologica text-2xl font-bold text-white shadow-[0px_4px_0px_#5E564D] duration-200 hover:translate-y-[2px] hover:bg-[#5E564D] hover:shadow-[0px_2px_0px_#5E564D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#756C63]"
          >
            {t('btnRules')}
          </button>
          <dialog
            ref={dialogRef}
            aria-labelledby="rules-title"
            className="rules-dialog fixed left-1/2 top-1/2 m-0 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#ded5c1] bg-[#FAF3E0] p-0 text-left font-geologica text-[#333333] shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm sm:rounded-3xl"
          >
            <header className="flex shrink-0 items-start gap-4 border-b border-[#ded5c1] px-5 py-5 sm:px-8 sm:py-6">
              <h2
                ref={titleRef}
                id="rules-title"
                tabIndex={-1}
                className="flex-1 text-xl font-semibold leading-snug outline-none sm:text-2xl"
              >
                {t('rules.title')}
              </h2>
              <button
                type="button"
                onClick={closeDialog}
                aria-label={t('btnTour')}
                className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#756C63] hover:bg-[#eae1ce] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#756C63]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>
            <div ref={contentRef} className="min-h-0 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
              <div className="space-y-7">
                {sections.map((section) => (
                  <section key={section.id} aria-labelledby={`rules-${section.id}`}>
                    <h3 id={`rules-${section.id}`} className="mb-3 text-lg font-semibold leading-snug text-[#534a40]">
                      {section.title}
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base font-normal leading-7 marker:text-[#8a7963]">
                      {section.items.map((item, index) => (
                        <li key={index} className="pl-1">{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
            <footer className="flex shrink-0 justify-end border-t border-[#ded5c1] px-5 py-4 sm:px-8">
              <button
                onClick={closeDialog}
                type="button"
                className="min-h-11 w-full rounded-full bg-[#756C63] px-7 py-2.5 text-base font-medium text-white hover:bg-[#5E564D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#756C63] sm:w-auto"
              >
                {t('btnTour')}
              </button>
            </footer>
          </dialog>
        </div>
      </div>
    </section>
  );
}
