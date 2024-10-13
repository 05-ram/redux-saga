import CourseDetails from "../pages/CourseDetails";
import Layout from "../pages/Layout";
import PlayList from "../pages/PlayList";
import PlayListDetails from "../pages/PlayListDetails";

const { createBrowserRouter } = require("react-router-dom")
const { default: Home } = require("../pages/Home")

const RouterData = () => {
  const strictRoute = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children:
          [
            {
              index: true,
              element: <Home />
            },
            {
              path: '/course-details',
              element: <CourseDetails />
            },
            {
              path: '/playlist',
              element: <PlayList />
            },
            {
              path: '/play-details',
              element: <PlayListDetails />
            }

          ]
      }
    ]
  )
  return strictRoute;
}

export default RouterData;
