import Syncano from '@syncano/core'

export default async (ctx) => {
  const { response, data } = new Syncano(ctx);
  
  if(ctx.args.task){
    const task = await data.task.create({
      todo: ctx.args.task ,
      date: new Date()
    })
    response.json(task)
  }

}