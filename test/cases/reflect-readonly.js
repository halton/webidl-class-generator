import reflector from "webidl-reflector";
export default class ReflectReadonly {
  get reflectMe() {
    return reflector["unsigned long"](this, "reflectMe");
  }
}
