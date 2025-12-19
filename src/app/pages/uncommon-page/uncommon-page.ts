import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, tap, map} from 'rxjs';

const client1 = {
  name: 'Juan',
  age: 25,
  gender: 'male',
  address: {
    country: 'Spain',
    home: 'Calle de la Princesa 123'
  }
};

const client2 = {
  name: 'Ana',
  age: 30,
  gender: 'female',
  address: {
    country: 'France',
    home: 'Avenue des Champs-Elysées 456'
  }
};

const client3 = {
  name: 'Pedro',
  age: 35,
  gender: 'male',
  address: {
    country: 'Italy',
    home: 'Via Roma 789'
  }
};
@Component({
  selector: 'uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage { 
  //i18n Select Pipe
  client = signal<typeof client1>(client1);

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else if (this.client() === client2) {
      this.client.set(client3);
    } else {
      this.client.set(client1);
    }
  }

  //i18n Plural Pipe
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  });
  clients = signal([
    'Juan',
    'Ana',
    'Pedro',
    'Maria',
    'Jose',
    'Luis',
    'Selva',
    'Raul',
    'Sonia',
  ])

  deleteClient() {
    this.clients.update(prev => prev.slice(0, -1));
  }

  //KeyValuePipe
  person = signal({
    name: 'Juan',
    age: 25,
    gender: 'male',
    address: 'Spain, Calle de la Princesa 123',
  });

  //AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise value');
      console.log('Promise value');
    }, 3500);
  });

  //Observable
  myObservable = interval(2000).pipe(
    map(value => value + 1),
    tap(value => console.log('tap', value))
  );
  
}
