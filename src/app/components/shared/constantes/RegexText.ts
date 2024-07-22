export class RegexText {
    public static  ALPHANUMERIC_REGEX = "^[a-zA-Z0-9]+$";
    public static  ALPHANUMERIC_WITH_SPACE_REGEX = "^[a-zA-Z0-9 ]*$";
    public static  FQDN_REGEX = "^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$";
    public static  IPV4_REGEX = "^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\\.(?!$)|$)){4}$";
    public static  HTML_REGEX = "<(\"[^\"]*\"|'[^']*'|[^'\">])*>";
    public static  MAIL_REGEX = "^[a-zA-Z][a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
    public static  PASSWORD_REGEX ="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";
    public static  ALPHANUMERIC_ACCENTUETED_REGEX2= "^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\\s- ]{1,60}$";
    public static  ALPHANUMERIC_ACCENTUETED_REGEX= "^[a-zA-Z0-9_@./?!\\#&+-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\\s- ]{1,60}$";
    // TODO complete this
    public static PHONE_REGEX = "^[0-9]+$";
    public static  NUMERIC_REGEX = "^[0-9]+$";
    //public static DATE_REGEX = "^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$";
    public static DATE_REGEX =""
}

