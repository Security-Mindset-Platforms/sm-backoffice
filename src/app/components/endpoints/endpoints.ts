import { environment } from '../../../environments/environment';
export class EndPoints {
    public static BASE_URI = "/api/v1/"
    public static APPLICATION_URI = environment.urlAPi+ EndPoints.BASE_URI +'applications/'+environment.realm+"/clients";
    public static USER_PROFIL_URI = environment.urlAPi+ EndPoints.BASE_URI + 'users/realms/'+environment.realm+"/user/";

    // organization
    public static ORGANIZATION_URI = environment.urlAPi+ EndPoints.BASE_URI +"organizations";
    public static DOMAIN_URI = environment.urlAPi+ EndPoints.BASE_URI +"users/realms";
    public static APPLICATIONS_URI = environment.urlAPi+ EndPoints.BASE_URI;

    //licence
    public static LICENCE_URI = environment.urlAPi+ EndPoints.BASE_URI +"licences";
}
