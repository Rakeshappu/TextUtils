#include <iostream>
using namespace std;
int main ()
{
    int x, y;
    x=2;
    cout << x;
    y = ++x * ++x;//9
    cout << x;

    cout << y;//49
    x=2;
    cout << x;

    y= x++ * ++x;//20
    cout << x;

    cout << y;//520
    return 0;
}



