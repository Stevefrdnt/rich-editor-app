import Head from "next/head";
import RichEditor from "components/RichEditor";
import LayoutContainer from "components/LayoutContainer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "antd/dist/reset.css";
config.autoAddCss = false;

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
      {/* to tackle antd.css module not found issue */}
      <script></script>;
    </div>
  );
}
