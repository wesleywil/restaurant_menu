import MenuTitle from "@/components/menu_title/menu_title.component";

export default function Login() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center font-bold text-3xl">
      <MenuTitle title="LOGIN" />
      <form className="p-2 flex flex-col text-2xl font-normal border rounded-xl">
        <label className="text-xl">Username</label>
        <input
          type="text"
          placeholder="username goes here"
          className="px-2 border rounded"
        />
        <label className="text-xl">Password</label>
        <input
          type="password"
          placeholder="password goes here"
          className="px-2 border rounded"
        />
        <div className="mt-4 flex gap-8 justify-center">
          <button className="px-2 bg-black text-white hover:text-slate-200 rounded">
            Login
          </button>
          <button
            type="button"
            className="px-2 bg-black text-white hover:text-slate-200 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
