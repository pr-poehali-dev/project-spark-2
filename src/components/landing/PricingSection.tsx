export default function PricingSection() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Заголовок */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          {/* Бейдж */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)]">
            <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                  stroke="#37322F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
              Список литературы
            </div>
          </div>

          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-tight">
            Главные труды Выготского
          </div>

          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Три книги, которые изменили понимание психологии развития и педагогики на десятилетия вперёд.
          </div>
        </div>
      </div>

      {/* Карточки трудов */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="flex justify-center items-start w-full">
          {/* Декоративный паттерн слева */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>

          {/* Контейнер карточек */}
          <div className="flex-1 flex flex-col md:flex-row justify-center items-center gap-6 py-12 md:py-0">
            {/* Мышление и речь */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12 bg-[rgba(255,255,255,0)]">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">Мышление и речь</div>
                  <div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    Главный труд Выготского. Анализ взаимосвязи языка и мышления, роли слова в развитии сознания.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
                      1934
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">
                      год издания
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    Основная работа
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Теория понятий",
                  "Речь и мышление",
                  "Внутренняя речь",
                  "Развитие значений слов",
                  "Роль языка в психике",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Психология развития человека */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-[#37322F] border border-[rgba(55,50,47,0.12)] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[#FBFAF9] text-lg font-medium leading-7 font-sans">Психология развития человека</div>
                  <div className="w-full max-w-[242px] text-[#B2AEA9] text-sm font-normal leading-5 font-sans">
                    Сборник ключевых статей, включая концепцию ЗБР и культурно-исторической теории.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#F0EFEE] text-5xl font-medium leading-[60px] font-serif">
                      1960
                    </div>
                    <div className="text-[#D2C6BF] text-sm font-medium font-sans">
                      год издания
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-[#FBFAF9] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#37322F] text-[13px] font-medium leading-5 font-sans">
                    Рекомендуется
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Зона ближайшего развития",
                  "Культурно-историческая теория",
                  "Интериоризация",
                  "Высшие психические функции",
                  "Роль обучения",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#FF8000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[#F0EFEE] text-[12.5px] font-normal leading-5 font-sans">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Психология искусства */}
            <div className="flex-1 max-w-full md:max-w-none self-stretch px-6 py-5 bg-white border border-[#E0DEDB] overflow-hidden flex flex-col justify-start items-start gap-12">
              <div className="self-stretch flex flex-col justify-start items-center gap-9">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="text-[rgba(55,50,47,0.90)] text-lg font-medium leading-7 font-sans">Психология искусства</div>
                  <div className="w-full max-w-[242px] text-[rgba(41,37,35,0.70)] text-sm font-normal leading-5 font-sans">
                    Анализ эстетической реакции как преодоления противоречий в художественном произведении.
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative h-[60px] flex items-center text-[#37322F] text-5xl font-medium leading-[60px] font-serif">
                      1925
                    </div>
                    <div className="text-[#847971] text-sm font-medium font-sans">
                      год написания
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 py-[10px] relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors">
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                  <div className="flex justify-center flex-col text-[#FBFAF9] text-[13px] font-medium leading-5 font-sans">
                    Доп. материал
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  "Эстетическая реакция",
                  "Анализ художественных текстов",
                  "Катарсис в искусстве",
                  "Психология творчества",
                  "Литературоведение",
                ].map((feature, index) => (
                  <div key={index} className="self-stretch flex justify-start items-center gap-[13px]">
                    <div className="w-4 h-4 relative flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="#9CA3AF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 text-[rgba(55,50,47,0.80)] text-[12.5px] font-normal leading-5 font-sans">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Декоративный паттерн справа */}
          <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
            <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
