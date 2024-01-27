import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators'; // Add the missing import for the 'map' operator
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LykdatService {
  constructor(private readonly httpService: HttpService) {}

  async globalSearchByImageUrl(image_link: string): Promise<any> {
    const data = new FormData();

    data.append('api_key', process.env.LYKDAT_PUBLISHABLE_API_KEY);
    data.append('image_url', image_link);

    const searchResult = this.httpService
      .post('global/search', data)
      .pipe(map((response: any) => response.data));

    // return searchResult.toPromise();
    return await lastValueFrom(searchResult);
  }

  // Add more methods as needed
}
