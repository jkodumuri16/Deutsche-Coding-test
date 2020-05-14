import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GlobeService } from './globe.service';

describe('GlobeService', () => {
  let service: GlobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GlobeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform country', () => {
    const mockCountry: any[] = [{
      name: 'test-name',
      currencies: [{ code: 'AAA' }, { code: 'BBB' }]
    }];
    const expected: any[] = [{
      id: 'test-name',
      name: 'test-name',
      currencies: [{ code: 'AAA' }, { code: 'BBB' }],
      currencyCodes: 'AAA, BBB'
    }];

    const result = service.transformCountry(mockCountry);

    expect(result).toEqual(expected);
  });
});
