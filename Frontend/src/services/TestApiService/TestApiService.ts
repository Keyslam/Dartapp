
class TestApiService {

    public async echo(message: string): Promise<string> {
        return fetch(`http://127.0.0.1:3306/test/echo?message=${message}`, {
            method: "GET",
        }).then((response) => {
            console.log(response);
            return response.text();
        });
    }

}

export const TestApiServiceInstance = new TestApiService();