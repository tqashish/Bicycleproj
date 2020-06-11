import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisrService {

  constructor(public _Http :HttpClient) { }
  regi(data)
   {
    return this._Http.post('http://localhost:8080/bicycle/Registration',data);
   }
logi(data1)
{
  return this._Http.post('http://localhost:8080/bicycle/Login',data1);
}

addbicycle(x)
{
  return this._Http.post('http://localhost:8080/bicycle/Addbicycle',x);
}
viewbicycle()
{
  return this._Http.get('http://localhost:8080/bicycle/viewdata');
}

delete(a)
{
  return this._Http.post('http://localhost:8080/bicycle/delete',a);
}

edit(a)
{
  return this._Http.post('http://localhost:8080/bicycle/edit',a);
}

}
