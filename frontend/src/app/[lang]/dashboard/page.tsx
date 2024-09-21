import { getLocaleDict } from "../locales/locale-settings";
import { LocaleType } from "../locales/locale-types";

export default async function Page({
  params: { lang },
}: {
  params: { lang: LocaleType };
}) {
  const locale = await getLocaleDict(lang);

  return (
    <>
      <p>{locale.test}</p>
    </>
  );
}
