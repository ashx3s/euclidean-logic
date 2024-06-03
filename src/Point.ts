interface SimplePoint {
  x: number
  y: number
}

export class Point implements SimplePoint {
  // define what it is
  readonly type = 'point'
  // input information is x and y position of the point
  constructor(public readonly x = 0, public readonly y = 0){}
  // change coordinates of point
  // get coordinates of point
  get coordinates(){
    return [this.x, this.y]
  }
 // get distance between two points 
  getDistanceFromOtherPoint(otherPoint: SimplePoint): number[]{
    return [Math.abs(this.x - otherPoint.x), Math.abs(this.y - otherPoint.y)] 
  }
  // TODO: generate labels for each point
}

