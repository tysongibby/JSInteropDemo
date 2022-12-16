using Microsoft.JSInterop;

namespace JSInteropDemo.Helpers
{
    public class RandomHelper
    {
        [JSInvokable("GenerateRandomInt")] // makes method invokable from JavaScript
        public static Task<int> GenerateRandomInt(int maxValue)
        {
            return Task.FromResult(new Random().Next(maxValue));
        }
    }
}
