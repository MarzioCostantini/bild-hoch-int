import { useTranslations } from "next-intl";

const Page = ({ params }) => {
  const link = params.link;

  const t = useTranslations(`${link}`);
  const keys = ["zeroConfig", "customizable", "fast"];

  // Erstellen Sie ein Array mit den Werten aus blogPost1
  const blogPost1Values = keys.map((key) => t(`${key}`));
  console.log("Blog Post 1 Values (Array):", blogPost1Values);

  // Erstellen Sie ein Objekt mit den Schlüsseln und Werten aus blogPost1
  const blogPost1Data = keys.reduce((acc, key) => {
    acc[key] = t(`${key}`);
    return acc;
  }, {});
  console.log("Blog Post 1 Values (Object):", blogPost1Data);

  return (
    <div>
      <h1>{blogPost1Data.zeroConfig}</h1>
      <ul>
        {keys.map((key) => (
          <li key={key}>{t(key)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
