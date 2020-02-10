interface PopperFlip {
  enabled: boolean;
}

interface PopperModifiers {
  flip: PopperFlip;
}

export default interface PopperOptions {
  modifiers: PopperModifiers;
}
