function Class(className,classUnit,capacity){
    this.className=className,
    this.classUnit=classUnit,
    this.capacity=capacity
}
const softEngineeringClass=new Class("softEngineeringClass",3,25)
console.log(JSON.stringify(softEngineeringClass))
const networkClass=new Class("networkClass",2,35)
console.log(JSON.stringify(networkClass))
//part B
softEngineeringClass.book=true
console.log(JSON.stringify(softEngineeringClass))
networkClass.project=true
console.log(JSON.stringify(networkClass))


