import { createBrowserRouter } from "react-router-dom";
const pages = import.meta.glob("../pages/*.tsx", { eager: true });

interface Route {
  path: string;
  Element: JSX.Element;
  action?: () => void;
  loader?: () => Promise<any>;
  ErrorElement?: JSX.Element;
}

const routes: Route[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }
  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");
  routes.push({
    path: fileName === "home" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorElement: pages[path]?.ErrorBoundary,
  });
}

export const router = createBrowserRouter(
  routes.map(({ Element, ErrorElement, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorElement && { errorElement: <ErrorElement /> }),
  }))
);