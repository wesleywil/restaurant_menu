import MenuItem from "@/components/menu_item/menu_item.component";

export default function Beverages() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <div className="flex gap-2 items-center">
        <h1 className="h-2 w-4 bg-black"></h1>
        <h1>BEVERAGES</h1>
        <h1 className="h-2 w-4 bg-black"></h1>
      </div>
      <div className="mt-2 p-2 flex flex-col items-center justify-center gap-2">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
