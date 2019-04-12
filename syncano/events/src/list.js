import Syncano from '@syncano/core'

export default async (ctx) => {
  const { response, data } = new Syncano(ctx);
  
    const tasks = await data.task.list();
    response.json(tasks)
}