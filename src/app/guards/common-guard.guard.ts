import { CanMatchFn, Route } from "@angular/router";

export function numberParamGuard(...paramNames: string[]): CanMatchFn {
  return (route, segments) => {
    const params = findParams(route)

    for(const [k, v] of params ){
      console.log(k,segments[v].path)
      if( paramNames.includes(k) && isNaN( parseInt(segments[v].path)) )
        return false;
    }

    console.log('test');

    return true;
  }
}


function findParams(route: Route): Map<string, number>{
  const params= new Map<string, number>();

  if(route.path === undefined)
    return params;

  const segments = route.path.split('/');

  for (const segment of segments) {
    if(segment.startsWith(':'))
      params.set(segment.substring(1), segments.indexOf(segment));
  }

  return params;
}
