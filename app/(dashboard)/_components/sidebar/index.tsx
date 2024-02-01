import { Lists } from "./lists";
import { NewButton } from "./new-button";

export function Sidebar() {
  return (
    <div  className="fixed z-[1] text-white left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-4">
        <Lists />
      <NewButton />
    </div>
  )
}
