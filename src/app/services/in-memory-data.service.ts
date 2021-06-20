import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import User from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
      const users: User[] = [
          new User("1", "Admin", "Peter", "Password"),
          new User("2", "Mustermann", "Eric", "Password"),
          new User("3", "Schiffer", "Willy", "Password"),
          new User("4", "Kellermann", "Eva", "Password"),
          new User("5", "Meier", "Sandra", "Password"),
          new User("6", "Hassel", "Sven", "Password"),
          new User("7", "Benz", "Laura", "Password"),
          new User("8", "Schneider", "Helga", "Password"),
          new User("9", "Krisztián", "Vörös", "Password"),
      ];

      return {users};
  }
}
