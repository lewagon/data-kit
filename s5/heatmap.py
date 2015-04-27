import matplotlib.pyplot as plt

def heatmap(data):

    # Plot it out
    fig, ax = plt.subplots()
    heatmap = ax.pcolor(data, cmap=plt.cm.Blues, alpha=0.8)

    fig = plt.gcf()
    fig.set_size_inches(20,20)

    # turn off the frame
    ax.set_frame_on(False)

    # put the major ticks at the middle of each cell
    ax.set_yticks(np.arange(data.shape[0])+0.5, minor=False)
    ax.set_xticks(np.arange(data.shape[1])+0.5, minor=False)

    # want a more natural, table-like display
    ax.invert_yaxis()
    ax.xaxis.tick_top()

    # note I could have used nba_sort.columns but made "labels" instead
    ax.set_xticklabels(data.index, minor=False) 
    ax.set_yticklabels(data.columns, minor=False)

    # rotate the 
    plt.xticks(rotation=90)

    ax.grid(False)

    # Turn off all the ticks
    ax = plt.gca()

    for t in ax.xaxis.get_major_ticks(): 
        t.tick1On = False 
        t.tick2On = False 
    for t in ax.yaxis.get_major_ticks(): 
        t.tick1On = False 
        t.tick2On = False  