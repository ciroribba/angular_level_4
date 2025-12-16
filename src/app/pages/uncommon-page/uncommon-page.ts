import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nSelectPipe } from '@angular/common';

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
  imports: [Card, I18nSelectPipe],
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


}
