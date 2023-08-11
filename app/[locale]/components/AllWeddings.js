import weddingData from "../WeddingData";
import Image from "next/image";

export const getStaticProps = async () => {
  const AllWeddings = () => {
    console.log(weddingData[0].allImg + "/hochzeitsfotograf-gauting-136.jpg");

    let imgContent = [];

    for (let i = 1; i < weddingData[0].imglenght; i++) {
      imgContent.push(
        `${weddingData[0].folderPath}/hochzeitsfotograf-gauting-${[i]}.jpg`
      );
    }
  };

  console.log(imgContent);

  return (
    <main>
      <h1>All Weddings</h1>

      {imgContent.map((elme, index) => (
        <Image
          key={index}
          src={elme}
          height={600}
          width={800}
          alt="Hochzeitsfotograf Starnberg, Hochzeitsfotograf München, Hochzeitsfotograf Augsburg"
        />
      ))}
    </main>
  );
};

export default AllWeddings;
