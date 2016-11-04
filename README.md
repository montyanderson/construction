# construction

``` C
struct User {
	uint8_t age;
	int32_t favouriteNumber;
}
```

``` javascript
const Construction = requrie("construction");
const t = Construction.types;

const User = new Construction("LE", {
	age: t.UInt8;
	favouriteNumber: t.Int32
});
```
