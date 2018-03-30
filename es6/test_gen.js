    function* fakeGenerater() {
      yield {StatusCode: 0, Message: 'OK', Data: '1234567890'};
      return {StatusCode: 1, Message: 'NG'};
    }
    const generator = fakeGenerater();
    
    console.log(generator.next().value);
    console.log(generator.next().value);