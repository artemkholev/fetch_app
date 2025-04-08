import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoaded,
} from "vue-router";
import { Links, PathNames } from "@/shered/constants/route.constants";
import { MainLayout } from "@/widgets/mainLayout";
import { MainPage } from "@/pages/main";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.HOME,
      name: PathNames.HOME,
      component: MainPage,
      meta: {
        layout: MainLayout,
        title: "Главная",
        breadcrumb: () => [
          {
            title: "Главная",
          },
        ],
      },
    },
    {
      path: Links.POSTS,
      name: PathNames.POSTS,
      component: () => import("@/pages/posts").then((r) => r.PostsPage),
      meta: {
        layout: MainLayout,
        title: "Список постов",
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: "Главная",
            link: Links.HOME,
          },
          {
            title: route.meta.title,
          },
        ],
      },
    },
    {
      path: `${Links.POSTS}/:id`,
      name: PathNames.POST,
      component: () => import("@/pages/post").then((r) => r.PostPage),
      meta: {
        layout: MainLayout,
        title: "Пост",
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: "Главная",
            link: Links.HOME,
          },
          {
            title: "Список постов",
            link: Links.POSTS,
          },
          {
            title: ("Пост № " + route.params.id) as string,
          },
        ],
      },
    },
  ],
});

export default router;
