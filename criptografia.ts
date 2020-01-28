import { createHash } from "crypto";

export function devolverSHA256(cadena : string) : string
{
    let hash = createHash("sha256");
    return hash.update(cadena).digest('hex')
}

