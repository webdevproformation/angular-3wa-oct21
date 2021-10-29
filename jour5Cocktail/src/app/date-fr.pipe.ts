import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFr'
})
export class DateFrPipe implements PipeTransform {

  transform(date: string): string {
    const [jour, mois, annee] = date.split("/")

    const moisFr = [
              "janvier", "février", "mars", "avril", "mai", "juin", 
              "juillet" , "août" , "septembre", "octobre", "novembre", "décembre"];
    const index = parseInt(mois) - 1;

    return `${parseInt(jour)} ${moisFr[index]} ${annee}`;
  }

}
