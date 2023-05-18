export class LoadOptions{

    static regularoptions(virtualusers,duration) {
        const options = {
          vus: parseInt(virtualusers),
          duration: `${parseInt(duration)}s`
        };
        return options;
      }
  
    static constantRequestRate(rate,timeUnit,duration,preVUs,maxVUs){
        const options = {
            scenarios: {
              constant_request_rate: {
                executor: "constant-arrival-rate",
                rate: parseInt(rate),
                timeUnit: `${parseInt(timeUnit)}s`, // 100 iterations per second, i.e. 100 RPS
                duration: `${parseInt(duration)}s`,
                preAllocatedVUs: parseInt(preVUs), // how large the initial pool of VUs would be
                maxVUs: parseInt(maxVUs), // if the preAllocatedVUs are not enough, we can initialize more
              },
            },
          };
          return options;
    }   
}

