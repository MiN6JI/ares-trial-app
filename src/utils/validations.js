const emailPattern =
/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

const mobilePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const characterPattern = /^[A-Za-z]+$/;

const datePattern = /^-?[\d]+\/[0-1]\d\/[0-3]\d$/;

const timePattern = /^([0-1]?\d|2[0-3]):[0-5]\d$/;

const fulltimePattern = /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/;

const timeorFulltimePattern = /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/;

const hexPattern = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;

const hexaPattern = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;

const hexOrHexaPattern =
/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

const rgbPattern =
/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;

const rgbaPattern =
/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;

export const email = (val) =>
emailPattern.test(val) || "Please enter a valid email address";

export const mobile = (val) =>
mobilePattern.test(val) || "Please enter a valid mobile";

export const maxlength = (val) =>
val.length < 10 || `Max length should not exceed 10 characters`;

export const minlength = (val) =>
val.length > 9 || `Min length should be 10 characters`;

export const required = (val) => !!val || "Field is required";

export const characters = (val) =>
characterPattern.test(val) || "Please enter letters only";

export const date = (val) =>
datePattern.test(val) || "Please enter a valid date";

export const time = (val) =>
timePattern.test(val) || "Please enter a valid time";

export const fulltime = (val) =>
fulltimePattern.test(val) || "Please enter a valid full time";

export const timeorfulltime = (val) =>
timeorFulltimePattern.test(val) || "Please enter a valid time or full time";

export const hex = (val) =>
hexPattern.test(val) || "Please enter a valid hex code";

export const hexa = (val) =>
hexaPattern.test(val) || "Please enter a valid hexa code";

export const hexorhexa = (val) =>
hexOrHexaPattern.test(val) || "Please enter a valid hex or hexa code";

export const rgb = (val) =>
rgbPattern.test(val) || "Please enter a valid rgb code";

export const rgba = (val) =>
rgbaPattern.test(val) || "Please enter a valid rgba code";
