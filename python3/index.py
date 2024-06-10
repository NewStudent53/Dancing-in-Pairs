import tkinter as tk

def Refresh():
    button = window.getElementById('button')
    button.bind('<Button-1>', lambda event: Refresh())
    
    input_field = window.getElementById('number')
    number = int(input_field.get())
    
    Student1 = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
    Student2 = [0, 1, 1, 0, 0, 1, 1, 0, 0, 1]
    Student3 = [0, 0, 1, 1, 1, 0, 0, 0, 1, 1]
    Student4 = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0]
    Student5 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
    
    number -= 1
    
    Suma = Student1[number] + Student2[number] + Student3[number] + Student4[number] + Student5[number]
    number += 1
    print(number)
    
    if number == 0:
        window.getElementById('results').config(text='Remember: From Day#1 to Day#10')
    elif Suma % 2 == 0:
        print(f'Day # {number} is even')
        window.getElementById('results').config(text='even')
    else:
        print(f'Day # {number} is odd')
        window.getElementById('results').config(text='odd')

window = tk.Tk()
Refresh()
window.mainloop()