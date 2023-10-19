import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//LAYOUTS
import RootLayout from "./layouts/RootLayout.jsx";
import CareerLayouts from "./layouts/CareerLayouts.jsx";
import HelpLayout from "./layouts/HelpLayout.jsx";
//PAGES
import Home from "./pages/MainSections/Home.jsx";
import About from "./pages/MainSections/About.jsx";
import Error from "./pages/ErrorRoute/Error.jsx";
import Faq from "./pages/HelpSection/Faq.jsx";
import Contact from "./pages/HelpSection/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareerLayouts />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
