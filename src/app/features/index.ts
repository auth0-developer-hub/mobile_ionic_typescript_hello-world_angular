import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProtectedComponent } from "./protected/protected.component";
import { PublicComponent } from "./public/public.component";

export const FEATURE_COMPONENTS = [
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent,
    ProtectedComponent,
    PublicComponent
];

export * from "./admin/admin.component";
export * from "./home/home.component";
export * from "./not-found/not-found.component";
export * from "./profile/profile.component";
export * from "./protected/protected.component";
export * from "./public/public.component";