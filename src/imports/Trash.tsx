function WindowFrame() {
  return (
    <div className="absolute inset-0" data-name="Window Frame">
      <div className="overflow-clip relative size-full">
        <div
          className="absolute backdrop-blur-[25px] backdrop-filter bg-[#ffffff] inset-0"
          data-name="Background"
        />
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none shadow-[1px_1px_0px_1px_#000000]" />
    </div>
  );
}

function WindowFrame1() {
  return (
    <div
      className="absolute bottom-0 left-px right-px top-px"
      data-name="Window Frame"
    >
      <WindowFrame />
    </div>
  );
}

function Bars() {
  return (
    <div className="absolute contents left-1 top-1.5" data-name="Bars">
      <div
        className="absolute bg-[#000000] h-px left-1 right-1 top-1.5"
        data-name="Bar 01"
      />
      <div
        className="absolute bg-[#000000] h-px left-1 right-1 top-3"
        data-name="Bar 02"
      />
      <div
        className="absolute bg-[#000000] h-px left-1 right-1 top-[18px]"
        data-name="Bar 03"
      />
      <div
        className="absolute bg-[#000000] h-px left-1 right-1 top-[9px]"
        data-name="Bar 04"
      />
      <div
        className="absolute bg-[#000000] h-px left-1 right-1 top-[15px]"
        data-name="Bar 05"
      />
      <div
        className="absolute bg-[#000000] h-px left-1 right-1 top-[21px]"
        data-name="Bar 06"
      />
    </div>
  );
}

function IconClose() {
  return (
    <button
      className="absolute block cursor-pointer left-3.5 overflow-visible size-4 top-1.5"
      data-name="Icon / Close"
    >
      <div
        className="absolute bg-[#ffffff] left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        data-name="Square"
      >
        <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
      </div>
    </button>
  );
}

function Title() {
  return (
    <div
      className="absolute bg-[#ffffff] left-1/2 top-0 translate-x-[-50%]"
      data-name="Title"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-2 py-0 relative">
          <div className="flex flex-col font-['ChicagoFLF:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-center text-nowrap tracking-[-0.08px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
              Stacks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Titlebar() {
  return (
    <div className="absolute bg-[#ffffff] inset-0" data-name="Titlebar">
      <div className="overflow-clip relative size-full">
        <Bars />
        <IconClose />
        <Title />
      </div>
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Titlebar1() {
  return (
    <div className="absolute h-7 left-px right-px top-px" data-name="Titlebar">
      <Titlebar />
    </div>
  );
}

function WindowActiveNotExpandable() {
  return (
    <div
      className="absolute inset-0 rounded-[11px]"
      data-name="Window / Active / Not Expandable"
    >
      <WindowFrame1 />
      <Titlebar1 />
    </div>
  );
}

export default function Trash() {
  return (
    <div className="relative size-full" data-name="Trash">
      <WindowActiveNotExpandable />
    </div>
  );
}