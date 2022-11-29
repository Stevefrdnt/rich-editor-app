import Head from "next/head";
import RichEditor from "components/RichEditor";
import LayoutContainer from "components/LayoutContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Not Medium</title>
        <meta name='description' content='This is definitely not medium.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LayoutContainer>
        <RichEditor />
      </LayoutContainer>
    </div>
  );
}
