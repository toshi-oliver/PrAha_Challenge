import "./styles.css";
import { Top } from "./components/pages/Top"
import { DefaultLayout } from "./components/templates/DefaultLayout";

export default function App() {
  return (
    <DefaultLayout>
      <Top />;
    </DefaultLayout>
  )
};
