// dans le dossier src/app/start/ verifLogin.ts 

import { AbstractControl, ValidationErrors } from "@angular/forms";


export class VerifLogin{
    static neContientPasDePoint(control : AbstractControl) : ValidationErrors | null{
        // la condition est vérifiée (si la chaine de caractère contient le symbole .)
        // assertion de type 
        // console.log(control.value.indexOf("."));
        const verif = (control.value as string).indexOf(".") // -1 si la condition est fausse 
                                                             // nombre > -1 si la condition est respectée 
        if(verif !== -1){
            return { 
                message : "le champ ne peut contenir le symbole .",
                neContientPasDePoint : true
            }
        }
        // si la condition n'est pas respectée (ne contient pas de .) 
        return null ;
    }
}