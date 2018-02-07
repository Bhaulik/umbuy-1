import { SearchComponent } from './search.component';
import { AdvertisementService } from '../services/advertisement.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
describe('SearchComponent', () => {
    let component: SearchComponent;
    let service: AdvertisementService;
    beforeEach(() => {

      service = new AdvertisementService(null);
      component = new SearchComponent(service);
    });
    it('should call the server save the changed when the method is called ', () => {
        // arrange
   const spy = spyOn(service, 'getSearchResultByTitle').and.callFake(t => {
         return Observable.empty();
     });


         component.getData();
          // assert
         expect(spy).toHaveBeenCalled();

     });
    it('should get the result return from the server', () => {
        const results = {title: '1', id: 1};
        // arrange
      const spy = spyOn(service, 'getSearchResultByTitle').and.callFake(t => {
         return Observable.from([results]);
     });
       // Act
         component.getData();
         console.log(component.result);
    // assert
        expect(component.result.indexOf(results)).toBeGreaterThan(-1);
     });

    it('should set message property if server return and error', () => {
        const error = 'error';
        // arrange
      const spy = spyOn(service, 'getSearchResultByTitle').and.returnValue(Observable.throw(error));
       // Act
        component.getData();
        console.log(component.message);
    // assert
       expect(component.message).toBe(error);
     });

    });


