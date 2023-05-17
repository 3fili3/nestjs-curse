import { Injectable } from '@nestjs/common';

@Injectable()
export class NamesService {
    
    private Names: string[];

    constructor() {
        this.Names = []
    }

    createdName(name: string): boolean {
        this.Names.push(name)
        return true
    }

    updatedName(name: string) {
        const indexName = this.Names.findIndex(value => value === name)
        if(indexName === -1) return false
        this.Names[indexName] = name
        return true
    }

    removeName(name: string) {
        this.Names = this.Names.filter(value => value != name)
        return true
    }

    findAllNames(): string[] {
        return this.Names;
    }
}
