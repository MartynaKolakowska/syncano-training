import Syncano from '@syncano/core'

export default async (ctx) => {
  const { response, data} = new Syncano(ctx);
//   let obj = JSON.parse(ctx.args.item)
    console.log(ctx.args)
    const task = await data.task.delete(ctx.args.id)
    //response.json(task)

}