import { getLocaleDict } from "@/app/locales/locale-settings";
import { LocaleType } from "@/app/locales/locale-types";
import Image from "next/image";

export default async function Page({
  params: { lang },
}: {
  params: { lang: LocaleType };
}) {
  const locale = await getLocaleDict(lang);

  return (
    <section className="pt-10">
      <div className="md:px-20">
        <div className="px-2 md:px-10">
          <div className="flex justify-center py-10">
            <Image
              src="/logo.svg"
              alt="Growth Sphere"
              width="150"
              height="100"
            />
          </div>
          <div className="flex justify-center">
            <form className="flex flex-col">
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                className="border border-solid border-slate-400 rounded-lg px-2.5 h-12 w-80 "
              />

              <label className="mt-4">パスワード</label>
              <input
                name="password"
                type="password"
                className="border border-solid border-slate-400 rounded-lg px-2.5 h-12 w-80 "
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-lg h-12 w-80 mt-6">
                ログイン
              </button>
              <div>
                <p className="text-sm pt-4">
                  アカウントをお持ちではありませんか?
                  <a href="" className="text-sm ml-2 font-bold text-blue-500">
                    サインアップ
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="flex justify-center">
            <div className="w-80">
              <div className="flex items-center space-x-1 mt-4 ">
                <div className="flex-1 border-b border-gray-500"></div>
                <span className="text-sm text-gray-500">または</span>
                <div className="flex-1 border-b border-gray-500"></div>
              </div>
              <div className="flex flex-col">
                <button className=" border border-solid text-left border-slate-400 rounded-lg mt-4 px-2.5 h-12 w-80">
                  <a href="" className="flex">
                    <Image
                      src="/google.svg"
                      alt="Google Logo"
                      width="24"
                      height="24"
                    />
                    <p className="ml-2">Googleでログイン</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
