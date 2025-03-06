type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' },
  ];
}

export async function generateMetadata({ params }: { params: Params }) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: { params: Params }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>HoleTex</p>
      <p>branch update</p>
    </>
  );
}
