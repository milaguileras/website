import { Lead } from './lead';
import { Component, OnInit, Input } from '@angular/core';


describe('Lead', () => {
  it('should create an instance', () => {
    expect(new Lead("","",true,true,true,true,true,true,true,true,true)).toBeTruthy();
  });
});
