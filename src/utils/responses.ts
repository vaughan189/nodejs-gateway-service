class Responses {
    static errorResponseObj(){
        return {
            type: 'object',
            properties: {
                code: { type: 'number' },
                message: { type: 'string' },
                error: {type: 'string'}
            }        
        }
    }

    static successResponseObj(itemInterface){
        return {
            type: 'object',
            properties: {
                code: { type: 'number' },
                message: { type: 'string' },
                success: {type: 'string'},
                data: {
                    type: 'array', items: {
                        type: 'object',
                        properties: {
                            ...itemInterface
                        }
                    }
                }
            }  
        }
    }


   static responseData(status, description, data){
        return {
            status: status,
            description: description,
            data: data
        }
    }

}


export default Responses;